// Call the dataTables jQuery plugin
$(document).ready(function () {
  const table = $("#dataTable").DataTable({
    lengthChange: false,
    buttons: [
      {
        text: `<i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;Tambah Analisis Baru`,
        className: "btn-sm",
        action: function (e, dt, node, config) {
          window.location.href = "./create-analisis.html";
        },
      },
      {
        text: `<i class="fa fa-plus" aria-hidden="true"></i></i>&nbsp;Import Analisis`,
        className: "btn-sm",
        action: function (e, dt, node, config) {
          dt.ajax.reload();
        },
      },
      {
        text: `<i class="fa fa-print" aria-hidden="true"></i>&nbsp;Cetak`,
        className: "btn-sm",
        split: ["csv", "pdf", "excel"],
      },
      {
        text: `<i class="fa fa-filter" aria-hidden="true"></i>&nbsp;Preferensi Kolom`,
        className: "btn-sm",
        extend: "colvis",
      },
    ],
  });

  table.buttons().container().appendTo("#dataTable_wrapper .col-md-6:eq(0)");
});
