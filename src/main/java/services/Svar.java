package services;


public class Svar {
    private String svar;
    private boolean riktig;

    public Svar(){

    }

    public boolean isRiktig() {
        return riktig;
    }

    public void setRiktig(boolean riktig) {
        this.riktig = riktig;
    }

    public String getSvar() {
        return svar;
    }

    public void setSvar(String svar) {
        this.svar = svar;
    }
}
