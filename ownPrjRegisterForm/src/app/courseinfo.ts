import { Injectable } from "@angular/core";
import { Courses } from "src/Models/courses";


@Injectable()
export class CourseInfo{
    courses?:Courses[];
    constructor()
    {
        this.courses=[{cid:100,cname:"Cricket",cduration:"1 year",cfees:12000,cimage:"assets/images/cric.jgep",cdesc:"Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. The batting side scores runs by striking the ball bowled at the wicket with the bat (and running between the wickets), while the bowling and fielding side tries to prevent this (by preventing the ball from leaving the field, and getting the ball to either wicket) and dismiss each batter (so they are out). Means of dismissal include being bowled, when the ball hits the stumps and dislodges the bails, and by the fielding side either catching the ball after it is hit by the bat and before it hits the ground, or hitting a wicket with the ball before a batter can cross the crease in front of the wicket. When ten batters have been dismissed, the innings ends and the teams swap roles. The game is adjudicated by two umpires, aided by a third umpire and match referee in international matches."}
        ,{cid:101,cname:"Chess",cduration:"6 months",cfees:5000,cimage:"assets/images/chess1.jgp",cdesc:"Chess is a recreational and competitive board game played between two players. It is sometimes called Western or international chess to distinguish it from related games such as xiangqi. The current form of the game emerged in Southern Europe during the second half of the 15th century after evolving from similar, much older games of Indian and Persian origin. Today, chess is one of the world's most popular games, played by millions of people worldwide at home, in clubs, online, by correspondence, and in tournaments."},
        {cid:102,cname:"Volleyball",cduration:"6 months",cfees:12000,cimage:"assets/images/volleyball.jpg",cdesc:"Chess is a recreational and competitive board game played between two players. It is sometimes called Western or international chess to distinguish it from related games such as xiangqi. The current form of the game emerged in Southern Europe during the second half of the 15th century after evolving from similar, much older games of Indian and Persian origin. Today, chess is one of the world's most popular games, played by millions of people worldwide at home, in clubs, online, by correspondence, and in tournaments."}
        ];
    }

    getCourses()
    {
        debugger;
        return this.courses;
    }
}