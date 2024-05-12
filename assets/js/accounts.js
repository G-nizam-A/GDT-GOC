document.addEventListener("DOMContentLoaded", function () {

  var title = "Accounts";

  // var accountsData= [
  //   ["data1", "data2", "data3", "data4", "data5", "data14", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
  //   ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
  //   ["data1", "data2", "data3", "data34", "data5", "data66", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
  //   ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data85", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
  //   ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
  //   ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data19", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
  //   ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
  //   ["data1", "data20", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
  //   ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
  //   ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
  //   ["data16", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
  //   ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
  //   ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
  //   ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],
  //   ["data1", "data29", "data3", "data4", "data5", "data6", "data7", "data8", "data99", "data10", "data11", "data192", "data13", "data14", "data15", "data16"],
  //   ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data107", "data11", "data12", "data13", "data14", "data15", "data16"],
  //   ["data1", "data2", "data3", "data4", "data5", "data6", "data7", "data86", "data9", "data10", "data11", "data12", "data13", "data14", "data15", "data16"],

  // ];
  var accountsData = [
    {
      "Customer Name": "Customer A",
      "AM": "John",
      "CEM": "Emily",
      "DM": "David",
      "RFQ": "Yes",
      "SOW": "In Progress",
      "Welcome Packet": "Sent",
      "HLD": "Completed",
      "LLD": "In Progress",
      "SOP": "Pending",
      "RACI": "Defined",
      "KB's": "Available",
      "Reportings": "Weekly",
      "Monitoring Parameters": "Defined",
      "Account Operational Manual": "Draft",
      "Partner SOW": "Not Applicable"
    },
    {
      "Customer Name": "Customer B",
      "AM": "Sarah",
      "CEM": "Michael",
      "DM": "Jessica",
      "RFQ": "No",
      "SOW": "Not Started",
      "Welcome Packet": "Not Sent",
      "HLD": "Pending",
      "LLD": "Not Started",
      "SOP": "Pending",
      "RACI": "To be defined",
      "KB's": "Not Available",
      "Reportings": "Monthly",
      "Monitoring Parameters": "To be defined",
      "Account Operational Manual": "Draft",
      "Partner SOW": "Not Applicable"
    },
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
    scrollY: "500px",
    fixedHeader: true,
    responsive: true,
    data: accountsData, 
    columns: [
      { data: "Customer Name" },
      { data: "AM" },
      { data: "CEM" },
      { data: "DM" },
      { data: "RFQ" },
      { data: "SOW" },
      { data: "Welcome Packet" },
      { data: "HLD" },
      { data: "LLD" },
      { data: "SOP" },
      { data: "RACI" },
      { data: "KB's" }, 
      { data: "Reportings" },
      { data: "Monitoring Parameters" },
      { data: "Account Operational Manual" },
      { data: "Partner SOW" }
    ]
  });

  $('.dt-search label').remove();
  
  // accountsData.forEach(function(row) {
  //   table.row.add(row).draw();
  // });

  var titleDiv = $(`<div class="dt-layout-cell dt-start"><h2 class="dt-length">${title}</h2></div>`);
  $('.dt-layout-row .dt-start:first').after(titleDiv);

  
// var title = $('<h2>').text('Your Title Here');
// var wrapper = $('<div>').addClass('dt-layout-cell dt-start'); 
// wrapper.append(title); 
// $('#myTable_wrapper .dt-layout-row .dt-start').append(wrapper); 



});
