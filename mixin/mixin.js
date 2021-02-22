import logo from "../assets/logo.png";
export default {
    name: "Base",

    data() {
        return {
            name: "kareem",
            // image
            fruits: ['apple', 'banana', 'orange'],
            logo: logo,
            kilometers: 0,
            meters: 0,
            text: "text text text text",
            html: "<h1>html</h1>",
            bindText: "bindText bindText bindText",
            isAdmin: false,
            Admin: true,
            activeColor: "red",
            fontSize: "30",
            data: "",
            firstname: "dd",
            lastname: "ddd",
            val: 0,
        };
    },
    created() {
        //    this.$store.dispatch("fetchUsers");

    },
    props: {},
    methods: {
        submit() {
            /*
                        this.$store.dispatch("addUsers", {
                          title: this.form.title,
                          userId: this.form.id

                        });

            this.$store.dispatch("save", {
              id: idItem,
              userId: this.form.userId,
              title: this.form.title
            });
                        */
        },
    },
    mounted() {
        this.name = "kareem lashin";
    },
    watch: {
        name: function() {
            this.$refs.img.style.height = "50px";
        },

        kilometers: function(val) {
            this.kilometers = val;
            this.meters = val * 1000;
        },
        meters: function(val) {
            this.kilometers = val / 1000;
            this.meters = val;
        },
    },
    filters: {
        convert: function(v) {
            return "convert" + v;
        },
    },
    computed: {
        getfullname: function() {
            return this.firstname + " " + this.lastname;
        },
        /*
               cars() {
                 return this.$store.getters.all;
               },*/
    },
    updated() {},
};