// Single source of truth for Field Notes count.
// Update this ONE number when a new Field Note is added — every page reads from here.
const FIELD_NOTES_TOTAL = 18;

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.fn-total').forEach(function (el) {
    el.textContent = FIELD_NOTES_TOTAL;
  });
});
