function introduce_word_Open() {
    document.getElementById('introduce_word').style.display = 'block';
    document.getElementById('introduce_mind').style.display = 'none';
    document.getElementById('introduce_mbti').style.display = 'none';
}

function introduce_word_Close() {
    document.getElementById('introduce_word').style.display = 'none';
}

function introduce_mind_Open() {
    document.getElementById('introduce_mind').style.display = 'block';
    document.getElementById('introduce_word').style.display = 'none';
    document.getElementById('introduce_mbti').style.display = 'none';
}

function introduce_mind_Close() {
    document.getElementById('introduce_mind').style.display = 'none';
}

function introduce_mbti_Open() {
    document.getElementById('introduce_mbti').style.display = 'block';
    document.getElementById('introduce_word').style.display = 'none';
    document.getElementById('introduce_mind').style.display = 'none';
}

function introduce_mbti_Close() {
    document.getElementById('introduce_mbti').style.display = 'none';
}