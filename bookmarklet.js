javascript: navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
var cc = Array(128).fill(0.5);
getMIDIMessage = function (midiMessage) {
  var arr = midiMessage.data;
  var index = arr[1];
  var val = (arr[2] + 1) / 128.0;
  cc[index] = val;
};
function onMIDISuccess(midiAccess) {
  console.log(midiAccess);
  var inputs = midiAccess.inputs;
  var outputs = midiAccess.outputs;
  for (var input of midiAccess.inputs.values()) {
    input.onmidimessage = getMIDIMessage;
  }
}
function onMIDIFailure() {
  console.log("Could not access your MIDI devices.");
}
function getKnob(row, col) {
  if (row === 1) {
    return col + 12;
  } else if (row === 2) {
    return col + 28;
  } else if (row === 3) {
    return col + 48;
  }
}
function getSlider(col) {
  return col + 76;
}
