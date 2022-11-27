import Paper from "../components/Paper";

export default function Papers(){
    return(
        <div className = "page" id = "Papers">
            <p className = "section-title mb-5">Papers</p>
            <a href = "/report.pdf" target = "_blank" rel='noopener noreferrer'>
                <Paper 
                    name = "A NEAT Approach to Tetris" 
                    description = {`We attempt to apply NeuroEvolution of Augmenting Topologies to a competitive Tetris environment with a variety of game state representations,
                    fitness functions, and other hyperparameter configurations. Unfortunately,
                    we were not able to create a successful model. To confirm our methods, we
                    retried many of our experiments on more traditional, single player Tetris,
                    encountering the same obstacles as in the two player game.`}/>
            </a>  
            <a href ="/indepdent_study.pdf" target = "_blank" rel='noopener noreferrer'> 
                <Paper 
                name = "A Semester of Robust Statistics" 
                description = {`This is an independent-study course supervised by Prof. Yu Cheng. The main
                topic of the course is high-dimensional robust statistics. When a small fraction
                of the input samples is adversarially corrupted, even for the most basic statistical problems like estimating the mean and covariance of a distribution, classic
                statistical estimators either have dimension-dependent error guarantees or are
                hard to compute in the worst case. From an introductory level, we explain the
                basic pathway into understanding the field of Robust Statistics.`}/> 
            </a>
        </div>
    )
}