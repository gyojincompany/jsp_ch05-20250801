/**
 * 
 */

function joinCheck() {
	if(document.joinForm.mid.value.length == 0) { //아이디가 빈칸으로 입력된 경우
		alert("아이디는 필수 입력사항 입니다.");
		document.joinForm.mid.focus(); //해당 입력 폼으로 커서 이동
		return;
	}
	
	if(document.joinForm.mid.value.length < 4 || document.joinForm.mid.value.length > 15) { //아이디가 4자 이상 15자 이하만 허용
			alert("아이디는 4자 이상 15자 이하로 입력하셔야 합니다.");
			document.joinForm.mid.focus(); //해당 입력 폼으로 커서 이동
			return;
	}	
	
	if(document.joinForm.mpw.value.length == 0) { //비밀번호가 빈칸으로 입력된 경우
			alert("아이디는 필수 입력사항 입니다.");
			document.joinForm.mpw.focus(); //해당 입력 폼으로 커서 이동
			return;
	}
	
	if(document.joinForm.mpw.value.length < 4 || document.joinForm.mpw.value.length > 15) { //비밀번호는 4자 이상 15자 이하만 허용
				alert("비밀번호는 4자 이상 15자 이하로 입력하셔야 합니다.");
				document.joinForm.mpw.focus(); //해당 입력 폼으로 커서 이동
				return;
	}
	
	if(document.joinForm.mpwCheck.value.length == 0) { //비밀번호 확인이 빈칸으로 입력된 경우
				alert("비밀번호 확인은 필수 입력사항 입니다.");
				document.joinForm.mpwCheck.focus(); //해당 입력 폼으로 커서 이동
				return;
	}	
	
	if(document.joinForm.mpw.value != document.joinForm.mpwCheck.value) { 
	//비밀번호란에 입력한 값과 비밀번호 확인란에 입력한 값이 같은지 확인
				alert("비밀번호와 비밀버호 확인이 일치하지 않습니다.");
				document.joinForm.mpwCheck.focus(); //해당 입력 폼으로 커서 이동
				return;
	}
	
	if(document.joinForm.mname.value.length == 0) { //이름이 빈칸으로 입력된 경우
				alert("이름은 필수 입력사항 입니다.");
				document.joinForm.mname.focus(); //해당 입력 폼으로 커서 이동
				return;
	}
	
					
	
	if(document.joinForm.memail.value.length == 0) { //이메일이 빈칸으로 입력된 경우
				alert("이메일은 필수 입력사항 입니다.");
				document.joinForm.memail.focus(); //해당 입력 폼으로 커서 이동
				return;
	}										
		
		
	
	document.joinForm.submit();
}