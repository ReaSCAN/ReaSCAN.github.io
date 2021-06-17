function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function change_text(){
    var current_dp = reascan_data[data_ids.pop()]
    var filename = '/assets/data-browser-examples/' + current_dp['no_target_img_name'];
    var caption = current_dp['pattern'];
    if (caption == "p1") {
        caption = "Simple (no-clause)";
    } else if (caption == "p2") {
        caption = "1-relative-clause";
    } else if (caption == "p3") {
        caption = "2-relative-clauses";
    } else if (caption == "p3-rd") {
        caption = "2-relative-clauses (random distractors)";
    } else if (caption == "p4") {
        caption = "3-relative-clauses";
    } else if (caption == "p3-relative") {
        caption = "2-recursive-relative-clauses";
    }
    var description = current_dp['command'];
    var context = current_dp['action_sequence'];
    if (context.split(' ').length > 50) {
        context = context.replace(/(([^\s]+\s\s*){70})(.*)/,"$1…") + "...";
    }
    document.getElementById('pic').src = filename;
    document.getElementById('img-caption').innerHTML = caption;
    document.getElementById('img-description').innerHTML = description;
    document.getElementById('img-context').innerHTML = context;
    global_dp.pop();
    global_dp.push(current_dp);
}

function reveal_target(){
    console.log("reveal target");
    var filename = '/assets/data-browser-examples/' + global_dp[0]['target_img_name'];
    document.getElementById('pic').src = filename;
}

// console.log(reascan_data)
document.addEventListener("DOMContentLoaded", function(){
    var current_dp = reascan_data[data_ids.pop()]
    var filename = '/assets/data-browser-examples/' + current_dp['no_target_img_name'];
    var caption = current_dp['pattern'];
    console.log(caption);
    if (caption == "p1") {
        caption = "Simple (no-clause)";
    } else if (caption == "p2") {
        caption = "1-relative-clause";
    } else if (caption == "p3") {
        caption = "2-relative-clauses";
    } else if (caption == "p3-rd") {
        caption = "2-relative-clauses (random distractors)";
    } else if (caption == "p4") {
        caption = "3-relative-clauses";
    } else if (caption == "p3-relative") {
        caption = "2-recursive-relative-clauses";
    }
    var description = current_dp['command'];
    var context = current_dp['action_sequence'];
    if (context.split(' ').length > 50){
        context = context.replace(/(([^\s]+\s\s*){70})(.*)/,"$1…") + "...";
    }
    document.getElementById('pic').src = filename;
    document.getElementById('img-caption').innerHTML = caption;
    document.getElementById('img-description').innerHTML = description;
    document.getElementById('img-context').innerHTML = context;
    global_dp.push(current_dp);
});

var global_dp = [];

// var reascan_data = reascan_data
var data_ids = [];
for (var i = 0; i < reascan_data.length; i++) {
    data_ids.push(i);
}
// var data_ids = [0,1,2,3];
console.log(data_ids);
shuffle(data_ids);
console.log(data_ids);
