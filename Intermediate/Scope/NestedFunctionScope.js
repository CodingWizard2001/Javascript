// Comment where error occurs

function myFunction(){
    const userName = "Rahul"

    function nextFunction(){
        const website = " youtube";
        console.log(userName + website);
    }
    // console.log(website); -> Throws error
    nextFunction();
}
myFunction();