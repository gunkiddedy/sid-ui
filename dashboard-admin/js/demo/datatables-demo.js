// Call the dataTables jQuery plugin
$(document).ready(function () {
  const table = $("#dataTable").DataTable({
    lengthChange: false,
    buttons: [
      {
        text: `<i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;Penduduk Domisili`,
        action: function (e, dt, node, config) {
          dt.ajax.reload();
        },
      },
      {
        text: `<i class="fa fa-trash" aria-hidden="true"></i></i>&nbsp;Hapus Data`,
        action: function (e, dt, node, config) {
          dt.ajax.reload();
        },
      },
      {
        text: `<i class="fa fa-print" aria-hidden="true"></i>&nbsp;Cetak`,
        split: ["csv", "pdf", "excel"],
      },
      {
        text: `<i class="fa fa-filter" aria-hidden="true"></i>&nbsp;Preferensi Kolom`,
        extend: "colvis",
      },
    ],
  });

  table.buttons().container().appendTo("#dataTable_wrapper .col-md-6:eq(0)");
});
