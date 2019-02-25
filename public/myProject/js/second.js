$(function () {
    var currentPage = 1;
    var pageSize = 5;

    render();

    function render() {
        $.ajax({
            url: "/category/querySecondCategoryPaging",
            data: {
                page: currentPage,
                pageSize: pageSize
            },
            dataType: "json",
            success: function (info) {
                console.log(info);
                var htmlStr = template("secondTpl", info);
                $("tbody").html(htmlStr);

                // 初始化分页插件
                $("#paginator").bootstrapPaginator({
                    bootstrapMajorVersion : 3,
                    currentPage : info.page,
                    totalPages : Math.ceil(info.total / info.size),
                    onPageClicked :function(a,b,c,page){
                        currentPage = page;
                        render();
                    }
                })
            }
        })
    }

    // 点击添加,模态框显示
    $(".btn_add").on("click",function(){
        $("#addModal").modal("show");
    })
})