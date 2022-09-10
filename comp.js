function first(){
    return `<div id="TellUs">
    <h4 class="second-heading">Sign Up: Your Weight plan</h4>
</div>
<div id="info">
    <div class="input-field" id="weight-current">
        <label style="font-size: small;" for="">How much do you weigh?</label>
        <div id="w-input-outer">
            <input class="w-input" type="number" placeholder="">
            <label id="weight1">lb</label>
        </div>
    </div>

    <div class="input-field" id="weight-target">
        <label style="font-size: small;" for="">What is your target weight?</label>
        <div id="w-input-outer">
            <input class="w-input" type="number" placeholder="">
            <label id="weight2" for="">lb</label>
        </div>
    </div>
    <a href="#" onclick="changeUnit()">Switch to metric units (kg, cm)</a>
    <div class="input-field" id="weight-target">
        <label style="font-size: small;" for="">Your desired progress</label>
        <div id="onelb">
            <input class="jss550" name="radioDiallog" type="radio" value="0" checked="">
            <label for="onelb">Lose 1 lb/week</label>
        </div>
        <div id="oneandhalflb">
            <input class="jss550" name="radioDiallog" type="radio" value="0" checked="">
            <label for="oneandhalflb">Lose 1½ lb/week</label>
        </div>
        <div id="twolb">
            <input class="jss550" name="radioDiallog" type="radio" value="0" checked="">
            <label for="twolb">Lose 2 lbs/week</label>
        </div>
    </div>
</div>
<button type="button" id="next-button" class="btn btn-info">Next</button>`
}

export default first