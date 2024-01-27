function Validate (a, b, c) {
    const userForm = a;
    const errors = []
    console.log(errors)
    emailFilter     = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    alphanumFilter  = /^[A-Za-z0-9]+$/i;
    alphaFilter     = /^[A-Za-z]+$/i;

    const renderErrors = function (el) {

    }
    function validEmailSyntax (e) {if (e.validEmailSyntax != undefined) return String(e.value).search (emailFilter) != -1 ? e.validEmailSyntax.msg : false}
    function alphanum (e) {if (e.alphanum != undefined) return String(e.value).search (alphanumFilter) != -1 ? e.alphanum.msg : false}
    function min(e, min){if (e.min != undefined) return e.value.length > min ? e.min.msg : false}
    function max(e, max){if (e.max != undefined) return e.value.length < max ? e.max.msg : false}
    function between(e, min, max){if (e.between != undefined) return e.value.length > min || e.value.length < max ? e.between.msg : false}
    function equals(a,b){if (e.equals != undefined) return e.value===b.value ? e.equals.msg : false}
}