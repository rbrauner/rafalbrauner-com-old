<template>
    <div class="cookie-banner p-5" :class="cCookieBanner">
        <div class="d-flex flex-wrap align-items-center">
            <div class="col-12 col-md-9 mb-4 mb-md-0 pr-md-5 text-right">
                <div class="row">
                    <div class="text">{{ cookies.text }}</div>
                </div>
            </div>
            <div class="col-12 col-md-3 pr-md-5">
                <div class="row">
                    <button
                        class="btn btn-primary w-auto"
                        @click="acceptCookies"
                    >
                        {{ cookies.button }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cookie-banner {
    width: 100%;
    background-color: #c76842;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: #c76842 0px 0px 25px 0px;
    z-index: 1031;
    color: rgba(255, 255, 255, 0.75);

    .btn {
        color: #bd5d38;
        background-color: #fff;
        border-color: #fff;
    }
}
</style>

<script>
export default {
    name: "CookiesBannerComponent",
    data: function () {
        return {
            cookies: {
                text: "Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.",
                button: "Zgoda",
                visible: true,
                name: "cookies-accepted",
            },
        };
    },
    computed: {
        cCookieBanner: function () {
            return this.cookies.visible ? "" : "d-none";
        },
    },
    methods: {
        acceptCookies: function () {
            this.setCookie(this.cookies.name, true, 365);
            this.cookies.visible = false;
        },

        setCookie: function (cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        },

        getCookie: function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == " ") {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },

        checkCookie: function () {
            var user = this.getCookie("username");
            if (user != "") {
                alert("Welcome again " + user);
            } else {
                user = prompt("Please enter your name:", "");
                if (user != "" && user != null) {
                    this.setCookie("username", user, 365);
                }
            }
        },
    },
    mounted() {
        let cookiesAccepted = this.getCookie(this.cookies.name);
        if (cookiesAccepted) {
            this.cookies.visible = false;
        }
    },
};
</script>
