/**
 * 
 */

function joinCheck() {
	if(document.joinForm.mid.value.length == 0) { //아이디가 빈칸으로 입력된 경우
		alert("아이디는 필수 입력사항 입니다.");
		document.joinForm.mid.focus(); //해당 입력 폼으로 커서 이동
		return;
	}
	if(document.joinForm.mpw.value.length == 0) { //비밀번호가 빈칸으로 입력된 경우
			alert("아이디는 필수 입력사항 입니다.");
			document.joinForm.mpw.focus(); //해당 입력 폼으로 커서 이동
			return;
	}
	
	document.joinForm.submit();
}