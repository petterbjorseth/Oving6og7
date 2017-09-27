package services;


import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class Scoreboard implements Serializable{

    private Map<String, UserScore> userScores = new HashMap<String, UserScore>();

    public Scoreboard(){

    }

    public Map<String, UserScore> getUserScores() {
        return userScores;
    }

    public void setUserScores(Map<String, UserScore> userScores) {
        this.userScores = userScores;
    }

    public void addUser(UserScore userScore){
        userScores.put(userScore.getNick(), userScore);
    }

    public UserScore getUser(String nick){
        return userScores.get(nick);
    }
}
