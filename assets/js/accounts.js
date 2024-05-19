import { accountsData, title } from './accountData.js';

document.addEventListener("DOMContentLoaded", function () {

  let svgLogo = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0,0,256,256">
  <g fill="#606060" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M25.98047,2.99023c-0.03726,0.00118 -0.07443,0.00444 -0.11133,0.00977h-5.86914c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h3.58594l-10.29297,10.29297c-0.26124,0.25082 -0.36648,0.62327 -0.27512,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27512l10.29297,-10.29297v3.58594c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-5.87305c0.04031,-0.29141 -0.04973,-0.58579 -0.24615,-0.80479c-0.19643,-0.219 -0.47931,-0.34042 -0.77338,-0.33192zM6,7c-1.09306,0 -2,0.90694 -2,2v15c0,1.09306 0.90694,2 2,2h15c1.09306,0 2,-0.90694 2,-2v-10v-2.57812l-2,2v2.57813v8h-15v-15h8h2h0.57813l2,-2h-2.57812h-2z"></path></g></g>
  </svg>`
  
  let table = $("#myTable").DataTable({
    language: { searchPlaceholder: "Search...", },
    dom: '<"dt-buttons"Bf><"clear">lirtp',
  // layout: {
  //     topStart: {
  //         buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
  //     }
  // },
  lengthMenu: [[8, 18, 30, -1], [8, 18, 30, "All"]],
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
          return '<a href="' + row["RFQ"]["Link"] + '">' + data + svgLogo + "</a>";
        },
      },
      {
        data: "SOW.Value",
        render: function (data, type, row) {
          return '<a href="' + row["SOW"]["Link"] + '">' + data + svgLogo + "</a>";
        },
      },
      {
        data: "Welcome Packet.Value",
        render: function (data, type, row) {
          return (
            '<a href="' + row["Welcome Packet"]["Link"] + '">' + data + svgLogo + "</a>"
          );
        },
      },
      {
        data: "HLD.Value",
        render: function (data, type, row) {
          return '<a href="' + row["HLD"]["Link"] + '">' + data + svgLogo + "</a>";
        },
      },
      {
        data: "LLD.Value",
        render: function (data, type, row) {
          return '<a href="' + row["LLD"]["Link"] + '">' + data + svgLogo + "</a>";
        },
      },
      {
        data: "SOP.Value",
        render: function (data, type, row) {
          return '<a href="' + row["SOP"]["Link"] + '">' + data + svgLogo + "</a>";
        },
      },
      {
        data: "RACI.Value",
        render: function (data, type, row) {
          return '<a href="' + row["RACI"]["Link"] + '">' + data + svgLogo + "</a>";
        },
      },
      {
        data: "KB's.Value",
        render: function (data, type, row) {
          return '<a href="' + row["KB's"]["Link"] + '">' + data + svgLogo + "</a>";
        },
      },
      {
        data: "Reportings.Value",
        render: function (data, type, row) {
          return '<a href="' + row["Reportings"]["Link"] + '">' + data + svgLogo + "</a>";
        },
      },
      {
        data: "Monitoring Parameters.Value",
        render: function (data, type, row) {
          return '<a href="' + row["Monitoring Parameters"]["Link"] + '">' + data + svgLogo + "</a>";
        },
      },
      {
        data: "Account Operational Manual.Value",
        render: function (data, type, row) {
          return '<a href="' + row["Account Operational Manual"]["Link"] + '">' + data + svgLogo + "</a>" ;
        },
      },
      {
        data: "Partner SOW.Value",
        render: function (data, type, row) {
          return (
            '<a href="' + row["Partner SOW"]["Link"] + '">' + data + svgLogo + "</a>"
          );
        },
      },
    ],
  });

  $(".dt-search label").remove();

  // accountsData.forEach(function(row) {
  //   table.row.add(row).draw();
  // });

  // var titleDiv = $(
  //   `<div class="dt-layout-cell dt-start"><h2 class="dt-length">${title}</h2></div>`
  // );
  // $(".dt-layout-row .dt-start:first").after(titleDiv);

  // $(".dt-info h2").text(title);
  
  var h2Element = $('<h2></h2>').addClass('dt-info').text(title);
  $('.dt-info').replaceWith(h2Element);

  // var title = $('<h2>').text('Your Title Here');
  // var wrapper = $('<div>').addClass('dt-layout-cell dt-start');
  // wrapper.append(title);
  // $('#myTable_wrapper .dt-layout-row .dt-start').append(wrapper);

  $('#myTable').on('click', 'td', function(e) {
    let rowData = table.row($(this).parents('tr')).data();
    let cellName = table.column($(this).closest('td')).header().textContent.trim();

    if (rowData && rowData[cellName] && rowData[cellName].Link) {
      let link = rowData[cellName].Link;
      if (rowData[cellName].data) {
        console.log("Data:", rowData[cellName].data);
        $('.popup-content h3').text(cellName + " - " + rowData["Customer Name"]); 
        let dataList = '<ul>'; 
        rowData[cellName].data.forEach(item => {
          dataList += '<li><a href="' + item + '" target="_blank">' + item + '</a></li>';
        });
        dataList += '</ul>';
        $('.popup-content').find('div').html(dataList);
      }

      $('.popup-container').attr('id', link.substring(1));
    }
  });

});
