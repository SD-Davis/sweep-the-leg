#pragma strict
public var health:int  = 30;
public var currentCollision:GameObject;
public var playerNo:int;
public var body:Player;
private var damage:float;

function Start () {

}

function Update () {
	if(health <=0) {
		Destroy(GetComponent(HingeJoint2D));
		body.loseLeg();
		Destroy(this);
	}
}

function OnCollisionEnter2D(coll: Collision2D)
{
	currentCollision = coll.gameObject;
	
	switch (playerNo) {
	
	case 1: 
	if (coll.gameObject.tag=="Player2" || coll.gameObject.tag=="Player2Head" )
	{	
		damage = (coll.gameObject.GetComponent(Rigidbody2D).velocity.x + coll.gameObject.GetComponent(Rigidbody2D).velocity.y)/2;
		if (damage < 0) {
			damage *= -1;
		}
		health -= damage;
	}
		break;
		
	case 2:
	if (coll.gameObject.tag=="Player1" || coll.gameObject.tag=="Player1Head" )
	{
		damage = (coll.gameObject.GetComponent(Rigidbody2D).velocity.x + coll.gameObject.GetComponent(Rigidbody2D).velocity.y)/2;
		if (damage < 0) {
			damage *= -1;
		}
		health -= damage;
	} 
	break;
	
	default: 
	break;
	}
}