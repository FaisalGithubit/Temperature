function temp(){

    let check=+document.querySelector("#Checker").value;
    
    if(check<=10){
        alert("When the temperature is equal to or less than 10 degrees Celsius, it is generally considered to be quite cold. In such conditions, it is important to take certain precautions to ensure your well-being and safety. ")
        document.querySelector("#change").innerHTML=`When the temperature is equal to or less than 10 degrees Celsius, it is generally considered to be quite cold. In such conditions, it is important to take certain precautions to ensure your well-being and safety. 
        <br>
        <br>
        <b>
        <center>
        <u>Here AreSaftey Steps</u>
        </center></b>
        <br>
        <br>
        1.Protect your extremities: Wear a hat, gloves or mittens, and warm socks to prevent heat loss from your head, hands, and feet.
        <br>
        2.Stay dry: Moisture can make you feel colder, so make sure to stay dry by wearing waterproof outer layers and avoiding excessive sweating.
<br>
3.Cover exposed skin: Use scarves or face masks to cover your nose and mouth, and consider using a moisturizer or lip balm to protect your skin from dryness and chapping.
<br>
4.Keep your home warm: If you're indoors, maintain a comfortable temperature in your home by using a heating system. Make sure to follow safety guidelines and use heating devices properly.
<br>
5.Be cautious outdoors: Limit your exposure to cold temperatures and avoid prolonged outdoor activities if possible. If you must go outside, take breaks in warm areas and watch for signs of cold-related health issues, such as frostbite or hypothermia.`
    } else if(check>11 && check<=20){
        alert("When the temperature is greater than 10 degrees Celsius and less than or equal to 20 degrees Celsius, here are a few professional suggestions:")
        document.querySelector("#change").innerHTML=`When the temperature is greater than 10 degrees Celsius and less than or equal to 20 degrees Celsius, here are a few professional suggestions:
        <br>
        <br>
        <b>
        <center>
        <u>Here AreSaftey Steps</u>
        </center></b>
        <br>
        <br>
       1. Dress appropriately: Wear lightweight and comfortable clothing that provides enough warmth without being too heavy. Layering your clothes is a good option so you can adjust your clothing according to the temperature throughout the day.
        <br>
        2.Stay hydrated: Even moderate temperatures can cause dehydration, so it's essential to drink an adequate amount of water throughout the day. Carry a water bottle with you and sip water regularly to stay hydrated.
<br>
3.Protect yourself from the sun: If it's sunny outside, ensure you protect your skin from harmful UV rays. Apply sunscreen with a high SPF, wear a hat, and use sunglasses to shield your eyes.
<br>
4.Enjoy outdoor activities: The temperature range you mentioned is generally considered pleasant for outdoor activities. Take advantage of the comfortable weather by participating in activities like hiking, jogging, cycling, or picnicking in the park.
<br>
5.Be mindful of allergies: Spring and early autumn are known for triggering allergies in some individuals. If you're prone to allergies, keep track of pollen counts and take necessary precautions, such as taking antihistamines or avoiding specific outdoor areas during peak pollen times.
<br>
6.Check local weather forecasts: Weather conditions can change quickly, so it's a good idea to stay updated on the local weather forecasts. This way, you can plan your activities accordingly and be prepared for any changes in temperature or weather conditions.
        
        `
    }else if(check>20 && check<=30){
        alert("When the temperature is above 20 degrees Celsius and less than or equal to 30 degrees Celsius, it generally indicates a moderate and comfortable temperature range. My professional suggestion would be to take advantage of the pleasant weather and engage in outdoor activities or enjoy the natural surroundings.")
    document.querySelector("#change").innerHTML=`When the temperature is above 20 degrees Celsius and less than or equal to 30 degrees Celsius, it generally indicates a moderate and comfortable temperature range. My professional suggestion would be to take advantage of the pleasant weather and engage in outdoor activities or enjoy the natural surroundings.
    <br>
    <br>
    <b>
    <center>
    <u>Here AreSaftey Steps</u>
    </center></b>
    <br>
    <br>
    1.Outdoor exercise: Go for a jog, a bike ride, or a brisk walk in the park. The temperature is suitable for physical activities without excessive heat or cold.
 <br>
2.Picnic or outdoor meal: Plan a picnic with friends or family in a nearby park or garden. Enjoy the mild weather while having a meal outdoors.
 <br>
3.Explore nature: Visit botanical gardens, nature reserves, or nearby hiking trails to immerse yourself in nature. You can appreciate the beauty of the surroundings without being too hot or cold.
 <br>
4.Outdoor sports: Organize a friendly game of soccer, basketball, or any other outdoor sport. It's a great opportunity to enjoy the weather while being physically active.
 <br>
5.Visit outdoor attractions: Check out local outdoor attractions like zoos, amusement parks, or historical sites. The comfortable temperature will make your visit more enjoyable.
    `
    }else if(check>30 && check<=50){
        alert("When the temperature is between 30 and 50 degrees Celsius, it is considered a relatively high temperature range. Here are a few professional suggestions:")
        document.querySelector("#change").innerHTML=`When the temperature is between 30 and 50 degrees Celsius, it is considered a relatively high temperature range. Here are a few professional suggestions:
        <br>
        <br>
        <b>
        <center>
        <u>Here AreSaftey Steps</u>
        </center></b>
        <br>
        <br>
        1.Use sunscreen: Apply a broad-spectrum sunscreen with a high SPF (sun protection factor) to protect your skin from harmful UV rays.
  <br>
2.Stay cool indoors: Use fans, air conditioners, or coolers to maintain a comfortable indoor temperature. If you don't have access to cooling devices, try using wet towels or taking cool showers to cool down.
  <br>
3.Limit outdoor activities: Minimize strenuous activities and exercise during peak heat hours. If you need to be active, try to schedule it for the cooler parts of the day, such as early morning or late evening.
  <br>
4.Check on vulnerable individuals: Keep an eye on older adults, young children, and individuals with pre-existing medical conditions, as they are more susceptible to heat-related illnesses. Ensure they are staying cool and hydrated.
  <br>
5.Be aware of heat-related illnesses: Familiarize yourself with the symptoms of heat exhaustion and heatstroke. If you or someone around you experiences dizziness, nausea, headache, rapid heartbeat, or confusion, seek medical attention immediately.
        `
    }
    
}