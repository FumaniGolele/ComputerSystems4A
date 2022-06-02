
localStorage.setItem("ExecuteCheck","false");

$(document).ready(function() {
        
     setInterval('GetData()',35000);
     setInterval('GetSensor2()',35000);
     setInterval('GetSensor3()',35000);
     setInterval('GetSensor4()',35000);

 });

 function execute(message){
newmessage = message.replaceAll(' ', '+');
var request = new XMLHttpRequest();
request.open('GET', 'https://api.telegram.org/bot5405026731:AAFmx1cBTCy-GEdfb4ICjGOIFj5PYnnWJ-o/sendMessage?chat_id=-1001726240418&text='+newmessage, true)
request.send();
alert(message);
}

function enable()
{
   localStorage.setItem("ExecuteCheck","true");
   execute(
       "Mine Notifications Enabled"
   );

}

function disable()
{
   localStorage.setItem("ExecuteCheck", "false");
   execute(
       "Mine Notifications Disabled"
   );
}

 function GetData()
 {
     var url = 'https://api.thingspeak.com/channels/1708546/feed/last.json?callback=?';
     $.ajax
     ({
         url: url,
         type: 'GET',
         contentType: "application/json",
         //dataType: "json",
         //crossDomain: true,
         success: function (data, textStatus, xhr) {
         var inspect = parseFloat(data.field1);
         var inspectSecond = parseFloat(data.field2);
         if (localStorage.getItem("ExecuteCheck") == "true")
         {
         if(inspect >= 40){
             execute("Sensor 1 is above maximum threshold");
         }
         else if (inspect < 0)
         {
             execute("Sensor 1 is below minimum threshold");
         }
         if(inspectSecond >= 40){
             execute("Sensor 1 humidity is above threshold");
         }
         else if (inspectSecond < 0)
         {
             execute("Sensor 1 humidity is less than threshold");
         }
         
         
         }

        }
     });
 }


 function GetSensor2()
 {
     var url = 'https://api.thingspeak.com/channels/1737929/feed/last.json?callback=?';
     $.ajax
     ({
         url: url,
         type: 'GET',
         contentType: "application/json",
         //dataType: "json",
         //crossDomain: true,
         success: function (data, textStatus, xhr) {
             var inspect = parseFloat(data.field1);
         var inspectSecond = parseFloat(data.field2);
         if (localStorage.getItem("ExecuteCheck") == "true")
         if (localStorage.getItem("ExecuteCheck") == "true")
         {
         if(inspect >= 40){
             execute("Sensor 2 is above maximum threshold");
         }
         else if (inspect < 0)
         {
             execute("Sensor 2 is below minimum threshold");
         }
         if(inspectSecond >= 40){
             execute("Sensor 2 humidity is above threshold");
         }
         else if (inspectSecond < 0)
         {
             execute("Sensor 2 humidity is less than threshold");
         }
         
         
         }
        }
     });
 }
 function GetSensor3()
 {
     var url = 'https://api.thingspeak.com/channels/1738066/feed/last.json?callback=?';
     $.ajax
     ({
         url: url,
         type: 'GET',
         contentType: "application/json",
         //dataType: "json",
         //crossDomain: true,
         success: function (data, textStatus, xhr) {
             var inspect = parseFloat(data.field1);
         var inspectSecond = parseFloat(data.field2);
         if (localStorage.getItem("ExecuteCheck") == "true")
         {
            if (localStorage.getItem("ExecuteCheck") == "true")
            {
            if(inspect >= 40){
                execute("Sensor 3 is above maximum threshold");
            }
            else if (inspect < 0)
            {
                execute("Sensor 3 is below minimum threshold");
            }
            if(inspectSecond >= 40){
                execute("Sensor 3 humidity is above threshold");
            }
            else if (inspectSecond < 0)
            {
                execute("Sensor 3 humidity is less than threshold");
            }
            
            
            }
        }
         
     }
    });
 }
 function GetSensor4()
 {
     var url = 'https://api.thingspeak.com/channels/1738082/feed/last.json?callback=?';
     $.ajax
     ({
         url: url,
         type: 'GET',
         contentType: "application/json",
         //dataType: "json",
         //crossDomain: true,
         success: function (data, textStatus, xhr) { 
         var inspect = parseFloat(data.field1);
         var inspectSecond = parseFloat(data.field2);
         if (localStorage.getItem("ExecuteCheck") == "true")
         {
            if (localStorage.getItem("ExecuteCheck") == "true")
            {
            if(inspect >= 40){
                execute("Sensor 4 is above maximum threshold");
            }
            else if (inspect < 0)
            {
                execute("Sensor 4 is below minimum threshold");
            }
            if(inspectSecond >= 40){
                execute("Sensor 4 humidity is above threshold");
            }
            else if (inspectSecond < 0)
            {
                execute("Sensor 4 humidity is less than threshold");
            }
            }
         }
        }
     });
 }
