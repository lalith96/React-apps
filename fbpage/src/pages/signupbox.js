import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from './input';
import './signupbox.css';

export default class Login extends Component {
    render() {
        return (
            <div>
                <p id="ca">Create an account</p>
                <p id="free">It's free and always will be.</p>
                <Input type="text" placeholder="&nbsp;&nbsp;First name" width="200px" />
                <Input type="text" placeholder="&nbsp;&nbsp;Surname" width="200px" />
                <Input type="text" placeholder="&nbsp;&nbsp;Mobile number or email address" width="415px" />
                <Input type="text" placeholder="&nbsp;&nbsp;New password" width="415px" />
                <div className="birthday">
                    <p id="birth">Birthday</p>
                    <select>
                        <option>Day</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </select>
                    <select>
                        <option>Month </option>
                    </select>
                    <select>
                        <option>Year</option>
                    </select>
                    <a href=""><p id="bquestion">Why do I need to provide my date of birth?</p></a>
                </div>
                <div className="gender">
                    <input type="radio" /><p id="rad">Female</p>
                    <input type="radio" /><p id="rad">Male</p>
                </div>
                <p id="tandc">By clicking Sign Up, you agree to our <a href=""><span id="links">Terms</span></a>,<a href=""><span id="links">Data Policy</span></a> and <a href=""><span id="links">Cookie Policy</span></a>.
                 You may receive SMS notifications from us and can opt out at any time.</p>
                <Link to={"/signupscreen"}><input type="button" value="Sign Up" /></Link>
                    <div className="createpage">
                        <p id="celeb"><a href=""><span id="links">Create a Page</span></a> for a celebrity, band or business.</p>
                    </div>
            </div>
                )
            }
}