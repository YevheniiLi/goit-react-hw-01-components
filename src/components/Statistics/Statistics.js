export const Statistics = ({title, stats, label, percentage}) => (

    <section class="statistics">
    <h2 class="title">{title} </h2>

    <ul class="stat-list">
        <li class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
        </li>
        <li class="item">
        <span class="label">.mp3</span>
        <span class="percentage">14%</span>
        </li>
        <li class="item">
        <span class="label">.pdf</span>
        <span class="percentage">41%</span>
        </li>
        <li class="item">
        <span class="label">.mp4</span>
        <span class="percentage">12%</span>
        </li>
    </ul>
    </section>
);