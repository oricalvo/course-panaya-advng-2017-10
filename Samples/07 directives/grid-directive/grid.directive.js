myApp.directive("grid", function($compile, $parse) {
    return {
        restrict: "E",
        compile: function(element, attrs) {
            const columns = collectColumns(element);

            //const modelParseFn = $parse(attrs.model);

            console.log(attrs);

            for(const column of columns) {
                const templateFn = $compile(column.template);
                column.templateFn = templateFn;
            }

            console.log(columns);

            element.empty();

            element.append(buildTable(columns));

            return function link(scope, element, attrs) {
                console.log("link", scope);

                const tbody = element.find("tbody");

                //const model = modelParseFn(scope);

                console.log("model", scope.model);

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
        },
        terminal: true,
        scope: {
            model: "<",
        },
    };
});

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