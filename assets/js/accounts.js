import { accountsData, title } from "./accountData.js";

document.addEventListener("DOMContentLoaded", function () {
  $("#myTable").DataTable({
    dom: 'Bfrtip',
    buttons: [
      {
        extend: 'excelHtml5',
        text: 'Export Excel',
        exportOptions: {
          columns: ':visible',
          format: {
            body: function (data, row, column, node) {
              const anchorTags = $(node).find('a');
              if (anchorTags.length) {
                const links = anchorTags.map(function() { return $(this).attr('href'); }).get().join(', ');
                return links;
              }
              return data;
            }
          }
        }
      }
    ],
    layout: {
      topStart: {
        buttons: ["copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5"],
      },
    },
    language: { searchPlaceholder: "Search..." },
    lengthMenu: [
      [8, 18, 30, -1],
      [7, 18, 30, "All"],
    ],
    fixedColumns: { start: 1 },
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
        data: "RFQ",
        render: function (data, type, row) {
          let dropdown = `
            <div class="dropdown">
              <button class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ${data.Name}
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          `;
          data.Links.forEach((link) => {
            dropdown += `<a class="dropdown-item" href="${link.url}" target="_blank">${link.text}</a>`;
          });
          dropdown += `</div></div>`;
          return dropdown;
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

  var titleDiv = $(
    `<div class="dt-layout-cell dt-start"><h2 class="dt-length">${title}</h2></div>`
  );
  $(".dt-layout-row .dt-start:first").after(titleDiv);
});
