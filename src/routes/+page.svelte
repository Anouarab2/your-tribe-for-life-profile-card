<script>
    let { data } = $props(); 
    const person = data.person;
    import { onMount } from "svelte";

    onMount(() => {
        let spinButton = document.querySelector('button');
        let cardSpin = document.querySelector('.card');

        if (spinButton && cardSpin) {
            spinButton.addEventListener('click', spinCard);
        }

        function spinCard() {
            cardSpin.classList.toggle('spin');
        }
    });
</script>

<main>
    <section class="card">
          
        <div class="my-info">
            <h2 class="name">{person.name.split(" ")[0]}<br>{person.name.split(" ").slice(1).join(" ")}</h2>
            <p>HvA Second-Year</p>
        </div>


          <!-- <img class="avatar" src="{`https://fdnd.directus.app/assets/${person.mugshot}?w=200&h=200&fit=cover`}" alt="foto van mij"> -->
          <img class="avatar" src="assets/me.jpg" alt="foto van mij">

          <section class="my-story">
            <h3>The Story Thus Far</h3>
            <p>I’ve studied FDND for a year and am now in my second year. Creatures known as teachers have helped me get to where I am. They’ve developed warriors called students who are capable of creating interactive and dynamic web applications.</p>
          </section>

          <button aria-label="Spin card"></button>

        <a href="https://github.com/{person?.github_handle}">My GitHub</a>
    </section>

</main>