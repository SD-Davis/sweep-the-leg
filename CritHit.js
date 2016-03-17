#pragma strict

public var playerNo:int;
public var legA:LegScript;
public var legB:LegScript;

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(coll: Collider2D) {
	if (playerNo == 2 && coll.gameObject.tag=="Player1Head") {
		legA.health = 0;
		legB.health = 0;
	}
	if (playerNo == 1 && coll.gameObject.tag=="Player2Head") {
		legA.health = 0;
		legB.health = 0;
	} 
}