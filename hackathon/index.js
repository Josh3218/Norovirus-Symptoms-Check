function submitForm() {
    let NoroVirus = 0;

    // Get the value of each input field and converts to lowercase so there wont be capital and lowercase problems
    const vomited = document.getElementById('vomited').value.trim().toLowerCase();
    const diarrhea = document.getElementById('diarrhea').value.trim().toLowerCase();
    const cramps = document.getElementById('cramps').value.trim().toLowerCase();
    const headache = document.getElementById('headache').value.trim().toLowerCase();
    const bodyache = document.getElementById('bodyache').value.trim().toLowerCase();
    const fever = document.getElementById('fever').value.trim().toLowerCase();
    const contacted = document.getElementById('contacted').value.trim().toLowerCase();
    const nausea = document.getElementById('nausea').value.trim().toLowerCase();

    // points for each right point it increases the total
    if (vomited === 'true') NoroVirus += 1;
    if (diarrhea === 'true') NoroVirus += 1;
    if (cramps === 'true') NoroVirus += 1;
    if (headache === 'true') NoroVirus += 1;
    if (bodyache === 'true') NoroVirus += 1;
    if (fever === 'true') NoroVirus += 1;
    if (contacted === 'true') NoroVirus += 1;
    if (nausea === 'true') NoroVirus += 1;

    // creates the message
    let resultMessage = "";

    if (NoroVirus >= 4) {
        resultMessage = "We suggest you see a healthcare professional";
    } else {
        resultMessage = "You may have norovirus please keep track of your symptoms and if it worsens see a healthcare professional";
    }

    // Display the results
    alert(resultMessage);
}


