import React, { useEffect } from "react";
import "../../styles/pages/Home/Catalog.scss";
import { useSelector } from "react-redux";

const Catalog = () => {
  const { activeCategory } = useSelector((state) => state.menu);

  // TEMAKI -----------------------------------
  if (activeCategory === "temaki") {
    return (
      <div className="catalog">
        <div className="item">
          <div className="name">
            <p>SALMON & AVOCADO</p>
          </div>
          <div className="desc">
            <p>Salmon, Avocado & Yuzu Miso</p>
            <p>サーモン、アボカド、ゆず味噌</p>
          </div>
          <div className="price">
            <p>$7</p>
          </div>
        </div>

        <div className="item">
          <div className="name">
            <p>SPICY NEGI TUNA</p>
          </div>
          <div className="desc">
            <p>Spicy Tuna, Green Onion & Cucumber</p>
            <p>スパイシーツナ、ネギ＆キュウリ</p>
          </div>
          <div className="price">
            <p>$7</p>
          </div>
        </div>

        <div className="item">
          <div className="name">
            <p>UNAGI</p>
          </div>
          <div className="desc">
            <p>Eel, Cucumber, Sesame Seeds & Unagi Sauce</p>
            <p>うなぎきゅうりごまうなぎソース</p>
          </div>
          <div className="price">
            <p>$6</p>
          </div>
        </div>

        <div className="item">
          <div className="name">
            <p>EVERGREEN</p>
          </div>
          <div className="desc">
            <p>Pickle, Avocado, Cucumber & Shiso Leaf</p>
            <p>ピクルス、アボカド、きゅうり、大葉</p>
          </div>
          <div className="price">
            <p>$5</p>
          </div>
        </div>
      </div>
    );
  }

  // RICE BOWL ------------------------------------
  if (activeCategory === "rice bowl") {
    return (
      <div className="catalog">
        <div className="item">
          <div className="name">
            <p>CHIRASHI DON</p>
          </div>
          <div className="desc">
            <p>Sashimi Omakase, Tamagoyaki, Shiso Leaf, Ponzu Ikura</p>
            <p>刺身おまかせ、玉子焼き、大葉、ポン酢いくら</p>
          </div>
          <div className="price">
            <p>$16</p>
          </div>
        </div>

        <div className="item">
          <div className="name">
            <p>WAGYU DON</p>
          </div>
          <div className="desc">
            <p>Grilled Kagoshima As Wagyu, Onsen Egg & Lotus Crisp</p>
            <p>鹿児島焼 和牛と温泉卵と蓮根のクリスプ</p>
          </div>
          <div className="price">
            <p>$16.5</p>
          </div>
        </div>

        <div className="item">
          <div className="name">
            <p>SANSHO UNAIU</p>
          </div>
          <div className="desc">
            <p>Kabayaki Eel, Cucumber & Sansho Pepper</p>
            <p>鰻の蒲焼 きゅうりと山椒</p>
          </div>
          <div className="price">
            <p>$15</p>
          </div>
        </div>

        <div className="item">
          <div className="name">
            <p>KIMCHI YAKIMESHI</p>
          </div>
          <div className="desc">
            <p>Kimchi Egg Fried Rice, Green Onion, Edamame & Baby Corn</p>
            <p>キムチ卵チャーハン、ねぎ、枝豆、ベビーコーン</p>
          </div>
          <div className="price">
            <p>$8.5</p>
          </div>
        </div>
      </div>
    );
  }

  // Warm dishes -------------------------------------

  if (activeCategory === "warm dishes") {
    return (
      <div className="catalog">
        <div className="item">
          <div className="name">
            <p>MISO BLACK COD</p>
          </div>
          <div className="desc">
            <p>Miso Marinated Black Cod, Lotus Crisps & Togarashi</p>
            <p>黒タラの味噌漬け,ロータスクリスプ,トガラシ</p>
          </div>
          <div className="price">
            <p>$10</p>
          </div>
        </div>

        <div className="item">
          <div className="name">
            <p>YAKITORI KUSHIYAKI</p>
          </div>
          <div className="desc">
            <p>
              Konro Grilled Chicken Skewers, Green Onion, YOKU Teriyaki Sauce
            </p>
            <p>コンロ 鶏の串焼き ネギ ヨクテリヤキソース</p>
          </div>
          <div className="price">
            <p>$10</p>
          </div>
        </div>

        <div className="item">
          <div className="name">
            <p>SEAFOOD HARUMAK</p>
          </div>
          <div className="desc">
            <p>King Prawn & Cornish Crab Spring Roll & Shiso</p>
            <p>タラバエビとコーニッシュクラブの春巻きと紫蘇</p>
          </div>
          <div className="price">
            <p>$10</p>
          </div>
        </div>

        <div className="item">
          <div className="name">
            <p>MISO SCALLOPS</p>
          </div>
          <div className="desc">
            <p>
              Hokkaido Scallops, Shiitake Mushroom, Miso Sauce & Ponzu Jelly
            </p>
            <p>北海道産ホタテ、しいたけ、みそポン酢ゼリー</p>
          </div>
          <div className="price">
            <p>$18</p>
          </div>
        </div>
      </div>
    );
  }

  // DRINKS ------------------------------------------------

  if (activeCategory === "drinks") {
    return (
      <div className="catalog">
        <div className="item">
          <div className="name">
            <p>JAPANESE BEER</p>
          </div>
          <div className="desc">
            <p>KIRING LIGHT / SAPPORO</p> <p>キリンライト / 札幌</p>
          </div>
          <div className="price">
            <p>$5</p>
          </div>
        </div>

        <div className="item">
          <div className="name">
            <p>COLD SAKE</p>
          </div>
          <div className="desc">
            <p>SHO CHIKU BAI NIGORI CREME DE SAKE</p>
            <p>松竹梅にごりクリーム・ド・サケ</p>
          </div>
          <div className="price">
            <p>$13</p>
          </div>
        </div>

        <div className="item">
          <div className="name">
            <p>WINE</p>
          </div>
          <div className="desc">
            <p>PLUM / WHITE / RED</p> <p>プラム / ホワイト / レッド</p>
          </div>
          <div className="price">
            <p>$6</p>
          </div>
        </div>

        <div className="item">
          <div className="name">
            <p>SOFT DRINKS</p>
          </div>
          <div className="desc">
            <p>COKE / DIET COKE / SPRITE</p>
            <p>コーラ / ダイエットコーラ / スプライト</p>
          </div>
          <div className="price">
            <p>$3</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Catalog;
