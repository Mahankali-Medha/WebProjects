let inputBox=document.getElementById("input_box");
let generateOtpButtoon=document.getElementById("generate_otp_button_container");
let validateOtpButton=document.getElementById("validate_otp_button_container");
let otpContainer=document.getElementById("otp_container");
let otpStatus=document.getElementById("otp_status");
let cance=document.getElementById("cancel_button");
let mathObject=Math;
// console.log(inputBox.value);
function otpGeneration(){
    let generatedOtp=``;
    for(let otp=1;otp<=6;otp++)
    {
        generatedOtp+=parseInt(mathObject.random()*10);
    }
    return generatedOtp;
}
// console.log(otpGeneration());
generateOtpButtoon.addEventListener("click",()=>{
    otpContainer.textContent=otpGeneration();
    otpContainer.style.display="flex";
    otpContainer.style.color="white";
    cance.style.display="flex";
   
});            
// console.log(otpContainer.textContent);
cance.addEventListener("click",()=>{
    if(otpContainer.style.display=="flex")
    {
        otpContainer.style.display="none";
        cance.style.display="none";
    }
    else if(otpContainer.style.display=="none")
    {
        otpContainer.style.display="flex";
    }
});


setInterval(() => {
        validateOtpButton.addEventListener("click",()=>{
    otpStatus.style.display="flex";
    // if(inputBox.length!==5)
    // {
    //     otpStatus.textContent="Must Enter 6 Digit OTP..."
    //     otpStatus.style.color="red";
    // }
    if(otpContainer.textContent==inputBox.value)
    {
        otpStatus.textContent="OTP Verified Successfully...!✅";
        otpStatus.style.color="green";
    }
    else 
    {
        otpStatus.textContent="Entered Invallid OTP...❌";
        otpStatus.style.color="red";
    }
}, 1000);
});
