package services;

import java.io.Serializable;

public class UserScore implements Serializable{

    private String nick;
    private int score;

    public UserScore(){

    }

    public String getNick() {
        return nick;
    }

    public void setNick(String nick) {
        this.nick = nick;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}
