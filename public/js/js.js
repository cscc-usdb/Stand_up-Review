const app = () => {

    const standsName = ["Design", "Formation", "l'accueil", "Security", "Coding", "Robotics", "Events", "Startup"];

    const standsD = document.querySelectorAll(".have-animation.page1");
    const standsP = document.querySelectorAll(".have-animation.page2");


    //add event listner for all cards 
    standsD.forEach((item, index) => {
        item.addEventListener("click", () => {
            window.location.href = `src/Pages/presentation.html?bdStand=${standsName[index]}`;
        });
    });

    standsP.forEach((item, index) => {
        item.addEventListener("click", () => {
            let bdStandParams = parent.document.URL.substring(parent.document.URL.indexOf('bdStand'), parent.document.URL.length)
            window.location.href = `feedback.html?${bdStandParams}?bpStand=${standsName[index]}`;
        });
    });



    document.getElementById('button1').addEventListener("click", () => {
        const reviewTxt = document.getElementById('txt-area').value;

        //get params
        const params = parent.document.URL.substring(parent.document.URL.indexOf('bdStand'), parent.document.URL.length);
        const splitetParams = params.split("?");
        const ToGetBDS = splitetParams[0].split("=")
        const ToGetBPS = splitetParams[1].split("=")
        SubmiteReviewToDatabase({
            "best_design_stand": ToGetBDS[1],
            "best_presentation_stand": ToGetBPS[1],
            "message": reviewTxt
        })
    })

}

const SubmiteReviewToDatabase = (review) => {

    fetch(`http://localhost:3000/add/${review.best_design_stand}/${review.best_presentation_stand}/${review.message}`)
        .then(res => {
            res.json()
        })
        .then(() => {
            alert("thank you !")
            window.location.href = `../../index.html`;
        })
        .catch(err => {
            console.log(err);
        });
}


app();