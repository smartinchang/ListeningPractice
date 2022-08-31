first_click = false;
sound_position = -1;
label_position = -1;
score = 0;
function load() {
	const vocabulary = ["hello", "elephant", "computer", "good morning", "study", "Vietnamese", "English", "taxi", "class", "orange", "thinking", "cat"];
	vocabulary.sort(() => (Math.random() > .5) ? 1 : -1);
	sound = [vocabulary[0], vocabulary[1], vocabulary[2], vocabulary[3]];
	label = [vocabulary[0], vocabulary[1], vocabulary[2], vocabulary[3]];
	label.sort(() => (Math.random() > .5) ? 1 : -1);
	document.getElementById("label0").innerText = label[0];
	document.getElementById("label1").innerText = label[1];
	document.getElementById("label2").innerText = label[2];
	document.getElementById("label3").innerText = label[3];
}
function sound_click(position) {
	var msg = new SpeechSynthesisUtterance(sound[position]);
	var voices = window.speechSynthesis.getVoices();
	msg.voice = voices[0];
	window.speechSynthesis.speak(msg);
	sound_position = position;
	if (first_click == false) {
		first_click = true;
	} else {
		if (label_position >= 0) {
			if (sound[sound_position] == label[label_position]) {
				document.getElementById("label" + label_position).disabled = true;
				document.getElementById("sound" + sound_position).disabled = true;
				score += 1;
				if (score == 4) {
					alert("Chúc mừng bạn đã hoàn thành bài thực hành!");
				}
			}
		}
		first_click = false;
		sound_position = -1;
		label_position = -1;		
	}
}
function label_click(position) {
	label_position = position;
	if (first_click == false) {
		first_click = true;
	} else {
		if (sound_position >= 0) {
			if (sound[sound_position] == label[label_position]) {
				document.getElementById("label" + label_position).disabled = true;
				document.getElementById("sound" + sound_position).disabled = true;
				score += 1;
				if (score == 4) {
					alert("Chúc mừng bạn đã hoàn thành bài thực hành!");
				}
			}
		}
		first_click = false;
		sound_position = -1;
		label_position = -1;				
	}
}