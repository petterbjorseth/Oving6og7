package services;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Path("/services/")
public class Quizer {

    private static Map<String, Quiz> quizer = new HashMap<String, Quiz>();

    @GET
    @Path("{navn}")
    @Produces(MediaType.APPLICATION_JSON)
    public Quiz getQuiz(@PathParam("navn") String navn){
        return quizer.get(navn);
    }

    @GET
    @Path("{navn}/scoreboard")
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<UserScore> getScoreboard(@PathParam("navn") String navn){
        return quizer.get(navn).getScoreboard().getUserScores().values();
    }

    @PUT
    @Path("{navn}/scoreboard")
    @Consumes(MediaType.APPLICATION_JSON)
    public void updateScore(@PathParam("navn") String navn, UserScore userScore){
        quizer.get(navn).getScoreboard().getUser(userScore.getNick()).setScore(userScore.getScore() + 1);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<Quiz> getQuizer(){
        return quizer.values();
    }

    @POST
    @Path("{navn}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void nyQuiz(Quiz quiz){
        quizer.put(quiz.getNavn(), quiz);
    }

    @PUT
    @Path("{navn}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void addUser(@PathParam("navn") String navn, UserScore userScore){
         Scoreboard sb = quizer.get(navn).getScoreboard();
         sb.addUser(userScore);
    }
    /*
    @DELETE
    @Path("{navn}/scoreboard/{nick}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void deleteUser()*/
}
