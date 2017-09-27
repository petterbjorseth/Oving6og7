package services;

import java.io.Serializable;

public class Quiz implements Serializable{
    private String navn;
    private String dato;
    private String startTid;
    private Sporsmal[] sporsmal;
    private Scoreboard scoreboard = new Scoreboard();

    public Quiz(){

    }

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getDato() {
        return dato;
    }

    public void setDato(String dato) {
        this.dato = dato;
    }

    public String getStartTid() {
        return startTid;
    }

    public void setStartTid(String startTid) {
        this.startTid = startTid;
    }

    public Sporsmal[] getSporsmal() {
        return sporsmal;
    }

    public void setSporsmal(Sporsmal[] sporsmal) {
        this.sporsmal = sporsmal;
    }

    public Scoreboard getScoreboard() {
        return scoreboard;
    }

    public void setScoreboard(Scoreboard scoreboard) {
        this.scoreboard = scoreboard;
    }
}
