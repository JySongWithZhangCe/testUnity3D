#pragma strict

public var moveSpeed: float;
public var bullet: GameObject;
public var bulletNember: int = 0;

function Start () {

}

function Update () {
	
	var x: float = Input.GetAxis("Horizontal")*Time.deltaTime*moveSpeed;  
	var z: float = Input.GetAxis("Vertical")*Time.deltaTime*moveSpeed;

	//移动
    transform.Translate(x,0,z);
    //开火
    if (Input.GetButtonDown("Fire1")) {
    	Instantiate(bullet,transform.position,transform.rotation);
    	bulletNember++;

    	gameObject.Find("Canvas/BulletsList").GetComponent.<UI.Text>().text
    	    = "开火数：" + bulletNember;
    }
    
    //仰
    if (Input.GetKey(KeyCode.Q)) {
    	print("Q");
    	transform.Rotate(0,-25*Time.deltaTime,0,Space.Self);
    }
    //俯视
    if (Input.GetKey(KeyCode.E)) {
    	transform.Rotate(0,25*Time.deltaTime,0,Space.Self);
    }
    //左
    if (Input.GetKey(KeyCode.Z)) {
    	transform.Rotate(-25*Time.deltaTime,0,0,Space.Self);
    }
    //右
    if (Input.GetKey(KeyCode.C)) {
    	transform.Rotate(25*Time.deltaTime,0,0,Space.Self);
    }
    //升高镜头
    if (Input.GetKey(KeyCode.H)) {
    	transform.Translate(0,5*Time.deltaTime,0);
    }
    //调低镜头
    if (Input.GetKey(KeyCode.N)) {
    	transform.Translate(0,-5*Time.deltaTime,0);
    }    
}
