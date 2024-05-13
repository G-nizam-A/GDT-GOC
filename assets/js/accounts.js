import { accountsData, title } from './accountData.js';

document.addEventListener("DOMContentLoaded", function () {

  $("#myTable").DataTable({
    language: { searchPlaceholder: "Search...", },
    lengthMenu: [ [8, 18, 30, -1], [7, 18, 30, "All"], ],
    fixedColumns: { start: 1, },
    paging: true,
    scrollCollapse: true,
    scrollX: true,
    scrollY: "500px",
    fixedHeader: true,
    responsive: true,
    data: accountsData,
    columns: [
      { data: "Customer Name" },
      { data: "AM" },
      { data: "CEM" },
      { data: "DM" },
      {
        data: "RFQ.Value",
        render: function (data, type, row) {
          return '<a href="' + row["RFQ"]["Link"] + '">' + data + "</a>";
        },
      },
      {
        data: "SOW.Value",
        render: function (data, type, row) {
          return '<a href="' + row["SOW"]["Link"] + '">' + data + "</a>";
        },
      },
      {
        data: "Welcome Packet.Value",
        render: function (data, type, row) {
          return (
            '<a href="' + row["Welcome Packet"]["Link"] + '">' + data + "</a>"
          );
        },
      },
      {
        data: "HLD.Value",
        render: function (data, type, row) {
          return '<a href="' + row["HLD"]["Link"] + '">' + data + "</a>";
        },
      },
      {
        data: "LLD.Value",
        render: function (data, type, row) {
          return '<a href="' + row["LLD"]["Link"] + '">' + data + "</a>";
        },
      },
      {
        data: "SOP.Value",
        render: function (data, type, row) {
          return '<a href="' + row["SOP"]["Link"] + '">' + data + "</a>";
        },
      },
      {
        data: "RACI.Value",
        render: function (data, type, row) {
          return '<a href="' + row["RACI"]["Link"] + '">' + data + "</a>";
        },
      },
      {
        data: "KB's.Value",
        render: function (data, type, row) {
          return '<a href="' + row["KB's"]["Link"] + '">' + data + "</a>";
        },
      },
      {
        data: "Reportings.Value",
        render: function (data, type, row) {
          return '<a href="' + row["Reportings"]["Link"] + '">' + data + "</a>";
        },
      },
      {
        data: "Monitoring Parameters.Value",
        render: function (data, type, row) {
          return (
            '<a href="' +
            row["Monitoring Parameters"]["Link"] +
            '">' +
            data +
            "</a>"
          );
        },
      },
      {
        data: "Account Operational Manual.Value",
        render: function (data, type, row) {
          return (
            '<a href="' +
            row["Account Operational Manual"]["Link"] +
            '">' +
            data +
            "</a>"
          );
        },
      },
      {
        data: "Partner SOW.Value",
        render: function (data, type, row) {
          return (
            '<a href="' + row["Partner SOW"]["Link"] + '">' + data + "</a>"
          );
        },
      },
    ],
  });

  $(".dt-search label").remove();

  // accountsData.forEach(function(row) {
  //   table.row.add(row).draw();
  // });

  var titleDiv = $(
    `<div class="dt-layout-cell dt-start"><h2 class="dt-length">${title}</h2></div>`
  );
  $(".dt-layout-row .dt-start:first").after(titleDiv);

  // var title = $('<h2>').text('Your Title Here');
  // var wrapper = $('<div>').addClass('dt-layout-cell dt-start');
  // wrapper.append(title);
  // $('#myTable_wrapper .dt-layout-row .dt-start').append(wrapper);
});
