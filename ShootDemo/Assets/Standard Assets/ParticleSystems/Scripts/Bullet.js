#pragma strict

public var thrust: float;
private var rb: Rigidbody;

function Start () {
	rb = GetComponent.<Rigidbody>();
	Destroy(gameObject,5.0);
	
}

function FixedUpdate () {
  rb.AddForce(transform.forward * thrust);
}
