<template>
    <div>
        <ul class="collection with-header">
            <li class="collection-header"><h4>Employers</h4></li>
            <li class="collection-item" v-for="employer in employers" :key="employer.id" > 
             <div class="chip"> {{employer.dept}} </div> 
             {{employer.employer_id}} :  {{ employer.name }} 

            <!--Recuperer ID-->
             <router-link class="secondary-content"  v-bind:to="{name: 'view-employer', params: {employer_id: employer.employer_id}}">
                 <i class="fa fa-eye"></i>
             </router-link>
             <!---->

            </li>
        </ul>
        
        <div class="fixed-action-btn">
            <router-link to="/new" class="btn-floating btn-large red">
                <i class="fa fa-plus" ></i>
            </router-link>
        </div>
    </div>
</template>



<script>

import db from './firebaseInit'

    export default{
        data(){
            return{
                employers: []
            }
        },
////RECUPERER DONNEES////
        created(){
            db.collection('employer').orderBy('dept').get().then(querySnapShot =>{
                    querySnapShot.forEach(doc => {
                        const data = {
                            'id': doc.id,
                            'employer_id': doc.data().employer_id,
                            'name' : doc.data().name,
                            'dept': doc.data().dept,
                            'position': doc.data().position
                        }
                        this.employers.push(data)
                    });
                })
            }
//////////////////////////


        }

    
</script>


