const starImgFull = 'images/star_1.png';
const starImgEmpty = 'images/star_2.png';
const ids0fStars = ["star-1", "star-2", "star-3", "star-4", "star-5"];
function star(k)
{
    // k - номер звезды на которую навёл пользователь //
    k--;
    const star = document.getElementById(ids0fStars[k]);
    if (star.src.includes(starImgEmpty))
    {
        for(let i=0; i<=k; i++){
            document.getElementById(ids0fStars[i]).src = starImgFull;
        }
    }
    else{
        for(let i=0; i<ids0fStars.length; i++){
        if(i>k){
            document.getElementById(ids0fStars[i]).src = starImgEmpty;
        }
        }
    }
}
resetRatingto0 = function(){
    const ids0fStars = ["star-1", "star-2", "star-3", "star-4", "star-5"];
        for(let i=0; i<ids0fStars.length; i++){
            document.getElementById(ids0fStars[i]).src = starImgEmpty;
    }
}



