<template>
    <div id="view-employer">
        <ul class="collection with-header">
            <li class="collection-item"><h4> {{name}} </h4></li>
            <li class="collection-item">Emploer ID#: {{employer_id}}  </li>
            <li class="collection-item">Departement: {{ dept }} </li>
            <li class="collection-item">Position: {{position}} </li>
        </ul>
        <router-link to="/" class="btn grey" >Retour</router-link>
        <button @click="deleteEmployer" class="btn red" style="margin-left: 10px;" >Supprimmer</button>

        <div class="fixed-action-btn">
            <router-link :to="{name: 'edit-employer', params: {employer_id: employer_id} } " class="btn-floating btn-large red">
                <i class="fa fa-pencil" ></i>
            </router-link>
        </div>
    </div>
</template>


<script>
    
    import db from './firebaseInit'

    export default{
        name: 'view-employer',
        data(){
            return{
                employer_id: null,
                name: null,
                dept: null,
                position: null
            }
        },

////RECUPERER DONNEES DUNE ROUTE////
        beforeRouteEnter(to, from, next){
            db.collection('employer').where('employer_id',
            '==', to.params.employer_id).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    next(vm =>{
                        vm.employer_id = doc.data().employer_id
                        vm.name = doc.data().name
                        vm.dept = doc.data().dept
                        vm.position = doc.data().position
                    })
                });
            })
        },

        watch:{
            '$route': 'fetchData'
        },
        methods:{
            fatechData(){
                db.collection('employer').where('employe_id', '==', this.$route.params.employer_id).get().then(querySnapshot =>{
                    querySnapshot.forEach(doc =>{
                        this.employer_id = doc.data().employer_id
                        this.name = doc.data().name
                        this.dept = doc.data().dept
                        this.position = doc.data().position
                    })
                })
            },
////SUPPRIMMER USER////
    deleteEmployer(){
        if(confirm('Etes vous sûr ?')){
            db.collection('employer').where('employer_id', '==', 
            this.$route.params.employer_id).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  doc.ref.delete();
                  this.$router.push('/')
                });
            })
        }
    },
},
/////////////////////
}
</script>