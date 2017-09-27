package services;

import java.io.Serializable;
import java.util.ArrayList;

public class Sporsmal implements Serializable{
    private String sporsmal;
    private int tid;
    private String bildeURL;
    private Svar[] svar;

    public Sporsmal() {
    }

    public String getSporsmal() {
        return sporsmal;
    }

    public void setSporsmal(String spørsmål) {
        this.sporsmal = spørsmål;
    }

    public int getTid() {
        return tid;
    }

    public void setTid(int tid) {
        this.tid = tid;
    }

    public String getBildeURL() {
        return bildeURL;
    }

    public void setBildeURL(String bildeURL) {
        this.bildeURL = bildeURL;
    }

    public Svar[] getSvar() {
        return svar;
    }

    public void setSvar(Svar[] svar) {
        this.svar = svar;
    }
}
