	function reset() {
    var ta = document.getElementById('texto');
    if (!ta.value || ta.value != ta.defaultValue && confirm('Opravdu chcete vymazat toto pole??!')) {
        ta.value = ta.defaultValue;
    }
}