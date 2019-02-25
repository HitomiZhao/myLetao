$(function () {

    // 点击主按钮,侧边栏隐藏
    $(".topBar_menu").on("click", function () {
        $(".lt_aside").toggleClass("now");
        $(".lt_topbar").toggleClass("now");
        $(".lt_main").toggleClass("now");
    })

    // 点击分类按钮,child展示
    $(".category").on("click", function () {
        $(this).next().stop().slideToggle();
    })

    // 点击退出按钮,发送ajax,切换到login.html
    $(".topBar_logout").on("click", function () {

        $(".topBar_logout").modal("show");
        $(".btnLogout").on("click", function () {
            $.ajax({
                type: "get",
                url: "/employee/employeeLogout",
                dataType: "json",
                success: function (info) {
                    console.log(info);
                    if (info.success) {
                        location.href = "login.html";
                    }
                }
            })
        })
    })
})