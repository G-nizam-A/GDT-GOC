import { accountsData, title } from './accountData.js';

document.addEventListener("DOMContentLoaded", function () {

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


    var popupContent = `
    <div id="" class="popup-container">
      <div class="popup-content">
        <a href="#" class="close">&times;</a>
        <h3></h3>
        <div></div>
      </div>
    </div>`;

  $('body').append(popupContent);

  $('#myTable').on('click', 'td', function(e) {
    let rowData = table.row($(this).parents('tr')).data();
    let cellName = table.column($(this).closest('td')).header().textContent.trim();

  
    if (rowData && rowData[cellName] && rowData[cellName].Link) {
      let link = rowData[cellName].Link;
      if (rowData[cellName].data) {
        console.log("Data:", rowData[cellName].data);
        $('.popup-content h3').text(cellName); 
        let dataList = '<ul>'; 
        rowData[cellName].data.forEach(item => {
          dataList += '<li><a href="' + item + '">' + item + '</a></li>';
        });
        dataList += '</ul>';
        $('.popup-content').find('div').html(dataList);
      }

      $('.popup-container').attr('id', link.substring(1));
    }
  });
    

});
