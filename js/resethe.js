	function reset() {
    var ta = document.getElementById('texto');
    if (!ta.value || ta.value != ta.defaultValue && confirm('בטוח לנקות את השדה הזה??!')) {
        ta.value = ta.defaultValue;
    }
}