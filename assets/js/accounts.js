document.addEventListener("DOMContentLoaded", function () {

  var title = "Accounts";

  var accountsData= [
    ["data1", "data2", "data3", "data4", "data5", "data14", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
    ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
    ["data1", "data2", "data3", "data34", "data5", "data66", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
    ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data85", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
    ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
    ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data19", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
    ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
    ["data1", "data20", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
    ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
    ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
    ["data16", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
    ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
    ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
    ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
    ["data1", "data29", "data3", "data4", "data5", "data6", "data7", "data8", "data99", "data10", "data11", "data192", "data13", "data14", "data15", "data16"],
    ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data107", "data11", "data12", "data13", "data14", "data15", "data16"],
    ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data86", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],

  ];


  var table = $('#myTable').DataTable({
    language: {
      searchPlaceholder: "Search..." 
    },
    lengthMenu: [ [8, 18, 30, -1], [7, 18, 30, "All"] ],
    fixedColumns: {
      start: 1,
    },
    paging: true,
    scrollCollapse: true,
    scrollX: true,
    
  });

  $('.dt-search label').remove();
  accountsData.forEach(function (row) {
    var newRow = table.row.add(row);
    newRow.draw();
  });

  var titleDiv = $(`<div class="dt-layout-cell dt-start"><h2 class="dt-length">${title}</h2></div>`);
  $('.dt-layout-row .dt-start:first').after(titleDiv);

  
// var title = $('<h2>').text('Your Title Here');
// var wrapper = $('<div>').addClass('dt-layout-cell dt-start'); 
// wrapper.append(title); 
// $('#myTable_wrapper .dt-layout-row .dt-start').append(wrapper); 



});
