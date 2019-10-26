

const review = {
    "b_d_stand": "",
    "b_p_stand": "",
    "message": ""
}
const app = () => {

    const standsName = ["Design", "Formation", "l'accueil", "Security", "Coding", "Robotics", "Events", "Startup"]

    const standsD = document.querySelectorAll(".have-animation.page1");
    const standsP = document.querySelectorAll(".have-animation.page2");


    //add event listner for all cards 
    standsD.forEach((item, index) => {
        item.addEventListener("click", () => {
            window.location.href = `src/Pages/presentation.html?bdStand=${index}`;
        });
    });

    standsP.forEach((item, index) => {
        item.addEventListener("click", () => {

            let bdStandParams = standsName[parseInt((parent.document.URL.substring(parent.document.URL.indexOf('bdStand'), parent.document.URL.length)).toString().replace("bdStand=", ""))]

            window.location.href = `feedback.html?bdStand=${bdStandParams}?bpStand=${standsName[index]}`;
            //review.b_p_stand = standsName[index];
        });
    });



    document.getElementById('button1').addEventListener("click", () => {
        const reviewTxt = document.getElementById('txt-area').value;
        let bdStand = (parent.document.URL.substring(parent.document.URL.indexOf('bdStand'), parent.document.URL.length)).toString().replace("bdStand=", "");
        let bpStand = (parent.document.URL.substring(parent.document.URL.indexOf('bpStand'), parent.document.URL.length)).toString().replace("bpStand=", "");
        review.b_d_stand = bdStand;
        review.b_p_stand = bpStand;
        review.message = reviewTxt;
        window.location.href = `/index.html`;
        alert(JSON.stringify(review));

        //TODO 
        /**call SubmiteReviewToDatabase() to pass review to db  */
    })

}


const SubmiteReviewToDatabase = (review) => { }



app();