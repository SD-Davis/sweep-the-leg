#pragma strict

private var power:int = 100;
public var playerNo:int;
public var score:int;
public var legs = [true, true];
public var gameController:GameController;

function Start () {

}

function Update () {
	movePlayer();
	if (!legs[0] && !legs[1]) {
		Destroy(this);
		gameController.gameOver(playerNo);
	}
		
}

function movePlayer() {
	switch (playerNo){
		case 1:
			rigidbody2D.AddForce(Vector2(Input.GetAxis("Horizontal")*power,Input.GetAxis("Vertical")*power));
		break;
			
		case 2:
			rigidbody2D.AddForce(Vector2(Input.GetAxis("Horizontal P2")*power,Input.GetAxis("Vertical P2")*power));
		break;
			
		default:
		break;
	}
}

function loseLeg() {
	if (legs[0]) {
		legs[0] = false;
	} else {
		legs[1] = false;
	}
}