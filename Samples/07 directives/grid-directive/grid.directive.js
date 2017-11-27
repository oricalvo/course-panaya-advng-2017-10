myApp.directive("grid", function($compile) {
    return {
        restrict: "E",
        terminal: true,
        compile: compile.bind(undefined, $compile),
        scope: {
            model: "<",
        },
    };
});

function compile($compile, element, attrs) {
    const columns = collectColumns(element);

    console.log(attrs);

    for(const column of columns) {
        const templateFn = $compile(column.template);
        column.templateFn = templateFn;
    }

    console.log(columns);

    element.empty();

    element.append(buildTable(columns));

    return function (scope, element, attrs) {
        link(columns, scope, element, attrs);
    }
}

function link(columns, scope, element, attrs) {
    console.log("link", scope);

    const tbody = element.find("tbody");

    console.log("model", scope.model);

    scope.$watchCollection("model", function(newValue, oldValue) {
        console.log("CHANGED", newValue, oldValue);

        clean(scope, tbody);

        buildTBody(scope, columns, attrs, tbody);
    });
}

function clean(scope, tbody) {
    let current=scope.$$childHead;;
    while(current) {
        const old = current;

        current = current.$$nextSibling;

        old.$destroy();
    }

    tbody.empty();
}

function buildTBody(scope, columns, attrs, tbody) {
    for(let i=0; i<scope.model.length; i++) {
        const row = scope.model[i];
        const tr = $("<tr></tr>");

        for(const column of columns) {
            const td = $("<td></td>");

            const rowScope = scope.$parent.$new(false, scope);
            rowScope[attrs.modelItem] = row;
            rowScope.$index = i;
            const clone = column.templateFn(rowScope, function(clone){});

            td.append(clone);
            tr.append(td);
        }

        tbody.append(tr);
    }
}

function buildTable(columns) {
    const table = $(`<table>
<thead>
<tr></tr>
</thead>
<tbody></tbody>
</table>`);

    const tr = table.find("tr");

    for(const column of columns) {
        tr.append("<td>" + column.title + "</td>");
    }

    return table;
}

function collectColumns(element) {
    const columns = [];

    element.find("column").each(function() {
        const column = $(this);

        const title = column.attr("title");
        const template = column.html();

        columns.push({
            title,
            template
        });
    });

    return columns;
}