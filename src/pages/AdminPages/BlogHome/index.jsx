import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../../../services/userServices";
import { LoadingContext } from "../../../context/LoadingContext";

const BlogHome = () => {
  const { setLoading } = useContext(LoadingContext);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    handleGetAllBlogs();
  }, []);

  const handleGetAllBlogs = async () => {
    try {
      setLoading(true);
      const data = await getAllBlogs();
      if (data.length) {
        setBlogData(data);
      }
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.log("err", error);
    }
  };

  console.log("blogData", blogData);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h4>Blogs home page </h4>{" "}
        <Link to="/admin/blogs/blog_edit/:sdfsdfg">Edit</Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
        perferendis? Odio illum natus possimus cumque, ducimus voluptas magni,
        tenetur voluptatum, ullam sint dolorem! Unde reprehenderit eos
        distinctio repellendus soluta enim officiis eveniet quis nostrum ut
        laboriosam repudiandae, beatae excepturi. Incidunt minus, dignissimos
        ratione quibusdam ipsa id vitae illum ipsam fuga animi veritatis, modi
        porro consectetur harum beatae. Numquam, officiis! Id eaque sint ipsam
        adipisci ipsum nostrum quibusdam fugiat iusto enim magnam, obcaecati
        consequatur exercitationem repudiandae, minima nam sapiente numquam
        commodi quos fugit voluptates. Perspiciatis, dignissimos nostrum?
        Dolore, sed quibusdam magnam accusamus vitae nisi quas laborum fuga,
        sit, dolorem tempore eos neque in inventore. Corporis tenetur modi ipsam
        velit ducimus obcaecati perferendis repellat necessitatibus suscipit,
        illum itaque reprehenderit quibusdam deleniti, dignissimos porro eum
        dolore dicta. Alias tempora corporis vel. Nesciunt fugit non facere,
        praesentium cum error, itaque ratione aspernatur culpa voluptates qui
        nulla quia commodi, cumque neque dolores. Veniam illum eveniet ut
        delectus natus, nesciunt, facilis quasi perspiciatis consequatur,
        dolorem incidunt? Natus vero quae recusandae quidem maxime inventore
        animi mollitia magnam illum? Dolorem corrupti ipsum repellendus eaque
        pariatur voluptatum, vitae perferendis esse laudantium magnam eum quae
        inventore consequuntur consectetur vel placeat quod iure, possimus dicta
        at voluptatibus ipsa. Dolores, culpa dolor modi incidunt rerum
        recusandae tempora. Laudantium, dicta dolores beatae aliquam eius
        consequuntur vitae, et accusantium sunt in velit? Expedita ut, dicta
        laudantium maiores voluptatum hic numquam, asperiores eaque dolor, totam
        quod iusto quaerat libero. Blanditiis animi numquam repellendus commodi
        quibusdam impedit magni molestiae? Maxime architecto iusto facere libero
        minus. Enim, vel. Ad tempore, voluptate hic aliquam nemo ratione
        quibusdam delectus eius et! Voluptatem similique modi deleniti minima,
        itaque, natus, doloremque reprehenderit voluptatibus molestias officia
        vel. Amet, ex, at totam beatae esse voluptas eius, corrupti fuga
        corporis incidunt veniam voluptatibus quidem earum pariatur ab aliquam
        nisi qui aliquid nemo possimus! Facere delectus atque, suscipit hic
        voluptatum sed laborum eveniet perferendis inventore voluptas quasi odio
        veritatis minima, placeat repudiandae. Sed ipsam consequuntur, numquam
        temporibus sint sit harum eius est magnam quasi adipisci excepturi vitae
        perferendis unde iusto? Eaque similique qui est accusamus, corrupti
        dolorem culpa architecto delectus eum sequi labore aspernatur quia
        distinctio amet pariatur quis ipsum voluptate aliquid natus, sint
        praesentium. Quo, ad vel dolorem dolor maxime veritatis possimus
        voluptate quae velit blanditiis, suscipit sint hic voluptates cumque,
        quidem facilis? Provident mollitia accusamus nemo rem, omnis quis
        voluptates quas repudiandae rerum vitae voluptatum praesentium ducimus
        ipsum ratione est saepe voluptatibus incidunt cupiditate consectetur.
        Eligendi consequuntur quasi placeat architecto necessitatibus aliquam
        unde, deserunt temporibus ad sed quod ullam aut molestias corrupti
        sapiente in numquam veritatis veniam rerum. Totam labore mollitia
        explicabo beatae pariatur qui, fugit consectetur cumque laboriosam et
        architecto magni. Porro enim inventore distinctio aspernatur fugiat
        laboriosam nulla officia eligendi sequi iusto ipsam qui quo, molestiae
        saepe repellendus dolorum vitae consequuntur fuga quidem maiores. Beatae
        consequatur ipsum recusandae qui iste ducimus quam rerum nam in,
        excepturi nesciunt, quod explicabo error hic porro quasi! Commodi
        delectus, molestias aliquid ipsa reprehenderit asperiores sint quisquam
        natus? Sapiente eius ipsa, dolore atque harum dolores debitis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        recusandae qui id expedita quae voluptates porro quas ipsum, corrupti
        molestiae ex consequatur, reiciendis iusto quam soluta quisquam dolor
        asperiores a error sed. Ducimus ipsa beatae atque molestias. Aliquid
        aliquam quisquam porro quaerat qui ea quae unde id voluptatibus ipsum
        nostrum sapiente nihil obcaecati dolore fugit architecto, laborum quidem
        rerum magni facilis. Rem numquam dolorum animi fugiat? Accusamus
        exercitationem sit officiis delectus minus, molestiae repellendus
        aspernatur cupiditate harum? Omnis ea ut, ipsum distinctio laborum
        sequi. Nostrum cum excepturi fuga tenetur quod suscipit corrupti
        asperiores amet accusamus ut inventore esse quas veritatis incidunt quo
        ex, reprehenderit totam quibusdam dolorem necessitatibus quasi nesciunt
        facilis. Tenetur ullam similique possimus dolorum ipsum neque odit,
        repellat dignissimos! Obcaecati id laudantium culpa, nesciunt doloribus
        ad rerum blanditiis nemo. Nisi dolores accusantium ratione sint
        dignissimos! Quam sit quo, incidunt libero ea est rerum voluptatem
        dolore excepturi veniam eaque doloremque fugit dolores quia quas
        expedita omnis ipsam aliquam saepe qui ipsum facere blanditiis minima
        quaerat? Placeat molestiae nulla voluptate velit aspernatur, quidem
        modi, fuga, labore eveniet sed repudiandae voluptatem dolore doloribus
        distinctio repellendus officiis ex enim? Itaque, corporis quaerat ipsa
        tenetur pariatur fugiat sed totam unde nihil dicta placeat, error,
        temporibus dignissimos maxime cupiditate voluptatum nesciunt omnis
        eligendi. Quis aliquam cum porro ducimus. Et illum architecto facere
        officia nemo laborum deserunt laudantium consectetur fugiat vero facilis
        culpa repellendus, magni odit rerum accusantium at incidunt hic
        inventore molestias cumque tempora labore ad! Delectus, eveniet
        blanditiis odit molestiae cupiditate, aliquid quae assumenda laborum
        similique excepturi, officia enim cum repudiandae officiis quam
        provident porro. Aliquid molestias ea iure perferendis ullam pariatur
        accusamus eaque, quaerat illo debitis quo. Dignissimos esse dolore
        cumque id libero culpa vitae magnam ea ipsam error, necessitatibus
        delectus consectetur quibusdam. Consequatur esse vero facilis deleniti
        cumque debitis accusantium accusamus.
      </p>
    </div>
  );
};

export default BlogHome;
