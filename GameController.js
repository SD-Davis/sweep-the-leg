#pragma strict

public var gameEnded:boolean = false;
public var winText:GameObject;
public static var player1Score: int;
public static var player2Score: int;
public var player1ScoreText:GameObject;
public var player2ScoreText:GameObject;
public var resetText:GameObject;

public static var instance:GameController;

function Awake () {

	if ( instance == null )
	{
		DontDestroyOnLoad(gameObject);
		instance = this;
	}
	else if ( instance != this )
	{
		Destroy(gameObject);
	}
}

function Update () {
	if (Input.GetAxis("Reset")) {
		Application.LoadLevel(Application.loadedLevel);
	}
	if (player2ScoreText == null) {
		player2ScoreText = GameObject.Find("P2 Score Text");
	}
	if (player1ScoreText == null) {
		player1ScoreText = GameObject.Find("P1 Score Text");
	}
	if (winText == null) {
		winText = GameObject.Find("Win Text");
	}
	player2ScoreText.GetComponent(TextMesh).text = "P2: " + player2Score;
	player1ScoreText.GetComponent(TextMesh).text = "P1: " + player1Score;
}

public function gameOver (losingPlayer:int) {
	if (!gameEnded) {
		switch (losingPlayer) {
			case 1:
				gameEnded = true;
				winText.GetComponent(TextMesh).text = "Player 2 Wins";
				winText.SetActive(true);
				winText.GetComponent(TextMesh).color = Color.red;
				player2Score++;
				player2ScoreText.GetComponent(TextMesh).text = "P2: " + player2Score;
				resetText.SetActive(true);
			break;
			case 2:
				gameEnded = true;
				winText.GetComponent(TextMesh).text = "Player 1 Wins";
				winText.SetActive(true);
				winText.GetComponent(TextMesh).color = Color.blue;
				player1Score++;
				player1ScoreText.GetComponent(TextMesh).text = "P1: " + player1Score;
				resetText.SetActive(true);
			break;
			
			default:
			break;
		}
	}
}